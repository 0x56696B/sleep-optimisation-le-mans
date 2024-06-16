#!/bin/sh

# Pull the model
/usr/bin/ollama pull llama2

# Start the Ollama service
exec /usr/bin/ollama serve --port 11434

