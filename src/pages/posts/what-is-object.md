---
layout: ../../layouts/ArticleLayout.astro
title: Understanding Objects in Python
description: A practical guide to values, types, identity, references, mutability, and garbage collection in Python.
date: 2026-01-31T11:41:23+09:00
tags: [Python, Python3, Beginner Friendly, Data Model]
---

## What is an object?

```python
>>> 'Hello World'
'Hello World'
```

It’s simple, but it illustrates a key point for understanding objects in Python. It looks like the interpreter is just returning the string `'Hello World'`, but in fact the interpreter first creates a string object whose value is `'Hello World'`, then prints its string representation. What you see is just the result.

In Python, everything is an object: strings, integers, booleans, lists, dicts, functions, classes, exceptions, modules—you name it.

An object is like a transparent box that has a **value**, a **type**, and an **identifier (id)**. Because the box is transparent, we can look inside freely.

```text
---------------
|             |
|             |
|    value    |
|             |
| type        |
---------------
```

String and numeric objects are usually created with literals[^literal]:

```python
>>> 'Hello World'
'Hello World'
```

```text
---------------
|             |
|             |
| Hello World |
|             |
| type: str   |
---------------
```

```python
>>> 1991
1991
```

```text
---------------
|             |
|             |
|    1991     |
|             |
| type: int   |
---------------
```

[^literal]: A literal is syntax for creating a built-in object. For example, quoting arbitrary Unicode characters creates a string object; writing digits (not starting with 0) creates an integer object.

## Type and identifier

You can check an object’s type with the built-in `type()`:

```python
>>> type('Hello World')
<class 'str'>
>>> type(1991)
<class 'int'>
>>> type(type)
<class 'type'>
```

The built-in `id()` returns an object’s identifier:

```python
>>> id('Hello World')
4379060208  # varies by environment
>>> id(1991)
4372760080  # varies by environment
```

An identifier is unique for the lifetime of the object and does not change while the program runs.

In many implementations (especially CPython), the identifier corresponds to a memory address, so you can even access it directly with `ctypes.cast`:

```python
>>> import ctypes
>>> obj = 'Hello World'
>>> id(obj)
4379060208  # varies by environment
>>> assert ctypes.cast(id(obj), ctypes.py_object).value == 'Hello World'
```

> **Warning**  
> Direct memory access is discouraged in Python; you wouldn’t normally write code like this.

## Variables are not boxes

It’s sometimes said that a variable is a “box that stores a value,” but in Python that analogy is inaccurate. Consider:

```python
>>> var = 1991
>>> var
1991
```

More precisely, a variable is like a **tag attached to an object**.

```text
x Incorrect image: a box named var that contains 1991
----------------
|              |
|              |
|     1991     |
|              |
|  var         |
----------------

o Correct image: name var points to the integer object 1991
----------------
|              |
|              |
|     1991     |
|              |
| type: int    |-----[var]
----------------
```

This becomes clear with the next example:

```python
>>> a = [1, 2, 3]
>>> b = a
>>> a += [4]
>>> assert b == [1, 2, 3, 4]  # not [1, 2, 3]
```

`a` and `b` reference the same list object, so changes via `a` are seen through `b`.

Strictly speaking, a variable is a **reference** to an object. As long as a reference exists, the object is reachable; once all references are gone, the object becomes unreachable. Variables keep objects from being swept away by the waves of memory.

This also explains the difference between `is` and `==`:

```python
>>> a = [1, 2, 3]
>>> b = a
>>> a += [4]
>>> assert a is b
>>> assert a == b
>>> c = [1, 2, 3, 4]
>>> assert a is not c
>>> assert a == c
```

`is` compares identifiers (object identity), while `==` compares values. `a` and `b` are the same object, so `a is b` is true. `c` has the same value but is a different object, so `a is c` is false.

> **Note**  
> In C++ and some Rust types, treating variables as “boxes of values” can be fine. But even in Rust, references and heap-allocated values introduce the same concepts.

### Mutable vs immutable

Consider this code:

```python
>>> a = 1991
>>> b = a
>>> a += 34
>>> assert a == 2025
>>> b
# 2025? Or 1991?
```

The answer is `1991`. Wait—shouldn’t `b` change too? To understand this, we need to look at `+=` on immutable objects. For integers, strings, tuples, `a += 34` is effectively `a = a + 34`.

```python
>>> a = 1991
>>> b = a
>>> a += 34  # same as a = a + 34
>>> assert id(a) != id(b)  # a now points to a new object
>>> assert (a, b) == (2025, 1991)
```

In an assignment, the right-hand side is evaluated first. `a + 34` creates a new integer object; then `a` is rebound to that new object. `b` still refers to the original `1991`, so its value doesn’t change.

## Unreachable objects and memory reclamation

In the example below, `obj` keeps a reference to the object:

```python
>>> import ctypes
>>> obj = 'Hello World'
>>> id(obj)
4379060208  # varies by environment
>>> assert ctypes.cast(4379060208, ctypes.py_object).value == 'Hello World'
```

If no reference is kept, the object becomes unreachable and may be garbage-collected:

```python
>>> import ctypes
>>> id('Hello World')
4379060208
>>> ctypes.cast(4379060208, ctypes.py_object).value
b'e \u0001e\u0002ej\u0003¡\u0002j\u0004FdS'  # anything can happen
```

Here the object was likely collected; the result is undefined and may vary by environment.

## Garbage collection and reference counting

Python frees memory automatically when objects are no longer needed—this is **garbage collection**. More precisely, when an object becomes unreachable, it becomes a candidate for collection.

Reachability is often determined with **reference counting**: references up, count up; references down, count down. In CPython, when the count hits 0, the object is collectible.

You can inspect the reference count with `sys.getrefcount`:

```python
>>> import sys
>>> obj = 'Hello World'
>>> sys.getrefcount(obj)
2
>>> obj2 = obj
>>> sys.getrefcount(obj)
3
>>> obj2 = None
>>> sys.getrefcount(obj)
2
```

Line 4 adds a new reference `obj2`, so the count increases by 1. Line 6 rebinds `obj2` to `None`, so the count drops by 1.

> **Note**  
> The first `sys.getrefcount(obj)` returns 2 because passing the object as an argument temporarily creates an extra reference inside the function.

When the count hits 0, the object is collectible. The exact collection timing depends on the interpreter, but you can register a callback with `weakref.finalize`:

```python
>>> import weakref
>>> obj = {1, 2, 3}
>>> weakref.finalize(obj, lambda: print('garbage collected!'))
>>> obj = None
garbage collected!
```

Line 3 registers a callback for the set `{1, 2, 3}`. Line 4 drops the reference, the object is collected, and the callback runs.

Reference counting isn’t the only mechanism: even if counts are nonzero, a cycle can still be unreachable and thus collectible.

```python
>>> import weakref
>>> class A:
...     def __init__(self):
...         self.b = None
...
>>> class B:
...     def __init__(self):
...         self.a = None
...
>>> obj1 = A()
>>> obj2 = B()
>>> obj1.b = obj2
>>> obj2.a = obj1
>>> weakref.finalize(obj1, lambda: print('garbage collected!'))
>>> obj1 = obj2 = None
garbage collected!
```

Here instances of `A` and `B` reference each other, forming a cycle. After both external references are dropped, the objects are unreachable and get collected despite the cycle.

## Summary

This post explained the concept of objects in Python. Everything is an object; variables are merely references to objects. We looked at types, identifiers, reference counts, and garbage collection to build intuition. Keep these in mind as you dive deeper into Python’s data model.

## References

- [3. Data model – Python Language Reference](https://docs.python.org/3/reference/datamodel.html)
- _Introducing Python, 2nd Edition_ — Bill Lubanovic
- _Fluent Python, 2nd Edition_ — Luciano Ramalho
