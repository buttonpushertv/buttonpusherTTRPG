### Converting PNGs Over to WEBP Image Format

The PNG files we've downloaded are all quite large. If you'd like to save some space without sacrificing quality, you can convert all of them over to WEBP image format. This conversion can shrink your images from several GBs down to just a few hundred MBs. It's worth it, if you'd like to be efficient in your drive space usage.

My favorite tool to use for this job is [ImageMagick](https://imagemagick.org/). You can find downloads for just about any system via their website.

The basic code to convert from one format to another is:

	magick convert input-file.png output-file.webp

There are plenty of options and parameters to look into for this tool. Google is your friend.

### Pointing to the WEBP files
While you could certainly do some sort of global search and replace of `.png` to `.webp`, you may find its just easier to edit the Handlebar Templates and change the extension there and then re-run your import.