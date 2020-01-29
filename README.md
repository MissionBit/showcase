# showcase.missionbit.org

This is the source for showcase.missionbit.org!
We use [Jekyll] to help us generate www.missionbit.org because that's
what [GitHub Pages] uses. This lets us build a site with a lot of
pages without having to repeat so much over and over.

We use the following JavaScript, CSS, and font libraries to make the
site work well and look good:

* [jQuery]
* [Bootstrap]
* [Font Awesome]

## Setup

The most straightforward way is to install [Docker Desktop],
which takes care of managing the software required to build the site.

## HACKING

Open a Terminal and change to the directory where you've checked out
`showcase`, then run this command to start the [Jekyll]
preview server:

```bash
docker-compose up
```

This will run a webserver on your computer at
[http://127.0.0.1:4001/](http://127.0.0.1:4001/)
and automatically rebuild the site when you make changes to the files.
You will have to reload the pages in your browser to see the changes.

You can stop the server by pressing Ctrl-C.

You can run the tests locally with the following command:

```bash
docker-compose -f docker-compose-ci.yml up
```

## Using the page template

There's only one page template on the site right now,
index.html. It needs some CSS to look better. This is why
there is no global `_layout` or `_include` folders.

Everything else is just static content placed in sensibly
named directories such as `2014/spring/adventure`.

## Adding a new assignment to the showcase

* Create a new sensibly named directory for projects in that assignment,
  and put the projects in that direcotry. See the existing directory
  structure for examples.
* Edit [_data/assignments.yml](_data/assignments.yml) and add a
  description of the assignment, as well as the list of student
  projects for that assignment.

## Azure Deployment

The site is automatically built with [Azure Pipelines].

On a successful build of the master branch, the DeployMasterCDN
pipeline job publishes the build artifacts to Azure Blob Storage and then
modifies the CDN configuration to use this path as the new website.

Note that since the same blob store is used for all front-ends,
changes to the 404.html page only occur after merging to master.

[Azure Pipelines]: https://dev.azure.com/missionbit/www.missionbit.com/
[Docker Desktop]: https://www.docker.com/products/docker-desktop
[Jekyll]: http://jekyllrb.com/
[GitHub Pages]: https://pages.github.com/
[jQuery]: http://jquery.com/
[Bootstrap]: http://getbootstrap.com/
[Font Awesome]: http://fontawesome.io/
[YAML Front Matter]: http://jekyllrb.com/docs/frontmatter/
