# QGIS AU website

## Local installation - to run the first time

### Install Jekyll

See https://jekyllrb.com/docs/installation/

`gem install bundler jekyll`

### Clone the repo
* `cd qgis-au-website`

### Install gems

```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

## Run in a local browser

* `bundle exec jekyll serve`

=> Now browse to http://localhost:4000

- Note that if you get an error message when you do this, its likely that you need to run ```bundle install``` again

#### If using VS Code:

**To run**
* Open a new Terminal
* `bundle exec jekyll serve`

**To upload your changes**
* Go to Source Control
* Enter in the commit message
* Click the + to stage the commit
* From the Commit dropdown, select Commit & Sync

### Theming
If you are overriding the css, you must use the scss files (which get built as css on deploy).

### Adding a page

To add a standard page
- Create a new markdown page in the root directory (e.g. test.md)
- Add 'front matter' (i.e. the info at the top of the page).
- It will also automatically create the page title at the top of the page, so don't add another h1 tag to the page.
- You can add markdown, or html, or both to the page.
- example:

  ```
  ---
  layout: default
  title: Test Page
  permalink: /test-page/
  ---

  <div>
    I am a test page
  </div>

  ```

### Adding top level menu items
- Ideally you won't, :), because its best to keep it small and concise
- If you do, then in _config.yml there is a nav list. Follow the same format.

### Changing the home page image

1. Edit the header_image.yml file under _data
2. Upload an image in assets/img/home/header
  - Prefered dimensions of the image are something like 2500px x 600px (a smaller height is better if the image allows).
  - Prefered format is .webp (this is optimised for web), but other formats are fine.
  - Small is good - if its 300 dpi then downsize it to something like 72dpi. You can try optimising with the free version of tinify: https://tinypng.com/. Aim for under 500 KB
  - check whether dark text or light text shows better for the description and adjust in the header_image.yml file.


## Posts

- It needs to have a date format at the start of the file name to be published. It needs to follow format YYYY-MM-DD-filename.md
- The date field in the 'front matter' (ie between the --- at the top of post) can be forward posted, but a rebuild needs to be triggered to pubish it after the date has past.
- You should not start the post with an image. An excerpt from the beginning of your posts is what will show on the Posts page.
- Author is optional.
- Tag use should be consistent, paying special attention to use of captials. Inconsistent syntax will create a tag for each variation.
- There is a TAGS.md file under posts - record any new tags you add and use exisiting tags from this list.
- See images below for image help


## Working with images
-  Small is good - if its 300 dpi then downsize it to something like 72dpi. You can try optimising with the free version of tinify: https://tinypng.com/.
- Images with no caption should use:
  ```
  <img class="centered-image" src="/assets/img/posts/image_name" alt="Image description"/>
  ```
- Images with a caption should use:
    ```
    <figure class="centered-image">
      <img src="/assets/img/posts/image_name" alt= "Image description"/>
      <figcaption>This is the caption</figcaption>
    </figure>
    ```
- If you want to get a little fancy, then you can have inline images using the format below.
- Each image will have a class. They work like:
  - w-25 will take up a quarter of the page width
  - w-33 will take up a third of the page width
  - w-50 will take up a half of the page width

  ```
  <div class="inline-images">
    <img class="centered-image w-33" src="/assets/img/..." alt=""/>
    <img class="centered-image w-33" src="/assets/img/..." alt=""/>
    <img class="centered-image w-33" src="/assets/img/..." alt=""/>
  <div>
  ```

  - See this post for a w-50 example:
    - 2024-11-28-qgis-user-meeting-hobart
