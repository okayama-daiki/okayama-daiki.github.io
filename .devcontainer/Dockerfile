FROM oven/bun:latest

# Install cURL and Git
RUN apt update
RUN apt install -y curl git

# Install Node (required for Biome)
RUN curl -fsSL https://deb.nodesource.com/setup_23.x -o nodesource_setup.sh && \
  bash nodesource_setup.sh && \
  apt install -y nodejs && \
  rm nodesource_setup.sh

# Install Biome
RUN bun add -g @biomejs/biome
