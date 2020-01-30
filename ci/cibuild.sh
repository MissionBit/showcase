#!/bin/bash
set -e
DESTINATION="${DESTINATION:-./_site}"
jekyll build -d "${DESTINATION}" --trace

# htmlproofer "${DESTINATION}" \
#     --allow-hash-href \
#     --empty-alt-ignore \
#     --url-ignore "/drive.google.com/" \
#     --url-ignore "/opengameart.org/" \
#     --http-status-ignore="0,403,999" \
#     --disable-external \
#     --trace
