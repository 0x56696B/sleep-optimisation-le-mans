FROM ubuntu:20.04

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install ollama
RUN curl -fsSL https://ollama.com/install.sh | sh

# Pull the model
RUN /usr/bin/ollama pull llama2

# Copy the entrypoint script into the container
COPY start-ollama.sh /start-ollama.sh
RUN chmod +x /start-ollama.sh

# Expose the port
EXPOSE 11434

# Set the entrypoint
ENTRYPOINT ["/start-ollama.sh"]
