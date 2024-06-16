#!/bin/bash

curl -X POST http://localhost:3000/api/team/create -H "Content-Type: application/json" -d '{
  "team": {
    "name": "Team Alpha",
    "people": [
      {
        "firstName": "John",
        "lastName": "Doe",
        "age": 30,
        "gender": "male",
        "experience": 5,
        "weight": 75,
        "height": 180,
        "sleepTime": 8,
        "role": "driver",
        "activityLevel": {
          "level": 7
        },
        "shift": {
          "raceName": "Grand Prix"
        }
      },
      {
        "firstName": "Jane",
        "lastName": "Smith",
        "age": 28,
        "gender": "female",
        "experience": 6,
        "weight": 65,
        "height": 170,
        "sleepTime": 7,
        "role": "mechanic",
        "activityLevel": {
          "level": 8
        },
        "shift": {
          "raceName": "Grand Prix"
        }
      }
    ]
  }
}'
