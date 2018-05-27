#!/bin/bash
docker-compose -f docker-compose.yaml -f docker-compose-infrastructure.yaml up --build $@
# Optional kann z.B. -d (für detached) übergeben werden.
