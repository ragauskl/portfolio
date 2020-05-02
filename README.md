# Personal Portfolio

[![Build Status](https://travis-ci.org/ragauskl/portfolio.svg?branch=master)](https://travis-ci.org/ragauskl/portfolio)

# Known Issues

* Bubbles performance issue/lag. When moving, every now and then the bubbles will pause for ~150ms, this is due to Garbage Collection.
  No issues in code, tried to strip down code just to few plain bubbles and it still happens, memory allocation timeline did not show any abnormalities.
  Could be just something Angular does behind the scenes, no clue yet - leaving this for now.
