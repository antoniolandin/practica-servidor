#!/bin/bash
# Description: probar la funcionalidad de eliminar un comercio
# Author: Antonio Cabrera

API_URL="http://localhost:3000/api/commerces"
COMMERCE_CIF="12345678A"

curl -X DELETE "$API_URL/$COMMERCE_CIF?logical=true"
