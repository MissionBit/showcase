This is the source for www.missionbit.com/showcase/!

We use [Jekyll] to help us generate www.missionbit.com because that's
what [GitHub Pages] uses. This lets us build a site with a lot of
pages without having to repeat so much over and over.

We use the following JavaScript, CSS, and font libraries to make the
site work well and look good:
* [jQuery]
* [Bootstrap]
* [Font Awesome]
* [Ubuntu Font Family]
* [Source Code Pro]

# Setup

Make sure you have an administrator account on the computer and
install [Jekyll] by opening Terminal and typing the following command:

```bash
sudo gem install jekyll
```

# HACKING

Open a Terminal and change to the directory where you've checked out
`showcase`, then run this command to start the [Jekyll]
preview server:

```bash
jekyll serve --watch --safe
```

This will run a webserver on your computer at http://127.0.0.1:4000/
and automatically rebuild the site when you make changes to the files.
You will have to reload the pages in your browser to see the changes.

# Using the page template

There's only one page template on the site right now,
index.html. It needs some CSS to look better. This is why
there is no global `_layout` or `_include` folders.

Everything else is just static content placed in sensibly
named directories such as `2014/spring/adventure`.

# Adding a new assignment to the showcase

* Create a new sensibly named directory for projects in that assignment,
  and put the projects in that direcotry. See the existing directory
  structure for examples.
* Edit [_data/assignments.yml](_data/assignments.yml) and add a
  description of the assignment, as well as the list of student
  projects for that assignment.

[Jekyll]: http://jekyllrb.com/
[GitHub Pages]: https://pages.github.com/
[jQuery]: http://jquery.com/
[Bootstrap]: http://getbootstrap.com/
[Font Awesome]: http://fontawesome.io/
[Ubuntu Font Family]: http://font.ubuntu.com/
[Source Code Pro]: https://github.com/adobe/source-code-pro
[YAML Front Matter]: http://jekyllrb.com/docs/frontmatter/
