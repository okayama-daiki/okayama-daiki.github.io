interface VisitorData {
  visitCount: number;
  lastVisit: number; // timestamp
}

const STORAGE_KEY = "visitor_data";

const FIRST_VISIT_MESSAGES = ["Hello, World!"];

const RETURNING_MESSAGES = ["Welcome Back!", "Hello again!", "Good to see you!"];

const LONG_TIME_MESSAGES = ["Nice to see you again!"];

function getRandomMessage(messages: string[]): string {
  return messages[Math.floor(Math.random() * messages.length)];
}

export function getVisitorData(): VisitorData {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Failed to get visitor data:", error);
  }
  return { visitCount: 0, lastVisit: 0 };
}

export function updateVisitorData(): void {
  try {
    const currentData = getVisitorData();
    const now = Date.now();
    const newData: VisitorData = {
      visitCount: currentData.visitCount + 1,
      lastVisit: now,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  } catch (error) {
    console.error("Failed to update visitor data:", error);
  }
}

export function getGreetingMessage(): string {
  const data = getVisitorData();
  const now = Date.now();
  const daysSinceLastVisit = (now - data.lastVisit) / (24 * 60 * 60 * 1000);

  if (data.visitCount === 0) {
    return getRandomMessage(FIRST_VISIT_MESSAGES);
  }

  if (data.visitCount % 25 === 0) {
    return `Wow! This is your ${data.visitCount}th visit!`;
  }

  if (daysSinceLastVisit >= 30) {
    return getRandomMessage(LONG_TIME_MESSAGES);
  }

  return getRandomMessage(RETURNING_MESSAGES);
}
