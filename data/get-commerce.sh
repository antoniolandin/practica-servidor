#!/bin/bash
# Description: Obtener la lista de los comercios de varias formas

API_URL="http://localhost:3000/api/commerces"

# Obtener la lista de comercios
curl -X GET "$API_URL"
