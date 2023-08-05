bash
#!/bin/bash

# Memeriksa apakah variabel FFMPEG_INSTALL_METHOD ada dan nilainya adalah "prebuilt"
if [ "$FFMPEG_INSTALL_METHOD" = "prebuilt" ]; then
  # Menginstall ffmpeg menggunakan prebuilt binaries
  apt-get update
  apt-get install -y ffmpeg
fi
