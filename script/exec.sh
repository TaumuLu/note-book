#!/usr/bin/env bash

command="npm $*"

cd ./view && $command && cd ../ && cd ./server && $command && cd ../

