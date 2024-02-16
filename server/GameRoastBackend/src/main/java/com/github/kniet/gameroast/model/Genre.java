package com.github.kniet.gameroast.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Genre {
    @JsonProperty("Action")
    ACTION,
    @JsonProperty("RPG")
    RPG,
    @JsonProperty("Sports")
    SPORTS,
    @JsonProperty("Adventure")
    ADVENTURE,
    @JsonProperty("Simulation")
    SIMULATION,
    @JsonProperty("MMO")
    MMO,
    @JsonProperty("Puzzle")
    PUZZLE,
    @JsonProperty("Strategy")
    STRATEGY,
    @JsonProperty("FPS")
    FPS
}
