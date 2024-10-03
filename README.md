# Astro.js Project

Welcome to the Astro.js project! This README will help you get started and understand how the project is structured. Let’s dive right in!

## Prerequisites

Before you can work on this project, you need to have **Node.js** installed on your machine. You can download it from [here](https://nodejs.org/).

To check if you already have Node.js installed, run the following command in your terminal:

```bash
node -v
```

This should return the version number of Node.js installed. If you see something like v16.x.x or higher, you're good to go!

## Cloning the Repository

To get started, you need to clone the repository. Run this command in your terminal:

```bash
git clone https://github.com/ELIXIR-NO/website.git
```

Once cloned, navigate into the project directory:

```bash
cd website
```

## Installing Dependencies

After cloning the repository, you’ll need to install the necessary dependencies. We use `pnpm` as our package manager. Install the dependencies using:

```bash
pnpm install
```

If you don’t have pnpm installed globally, you can install it by running:

```bash
npm install -g pnpm
```

## Project Structure

This project follows a specific directory structure to organize the content. As a contributor, you will primarily be working inside the src/content/ folder. Below is a breakdown of the key directories within src/content/:

- `about`: Contains all the pages related to Elixir Node information. You will find details about the node services, missions, and visions here.
- `banner`: Holds the content for the top overlay banner that appears across the website. If you need to update the banner, this is where you do it.
- `landing`: The main landing page content resides here. Any changes or updates to the homepage should be made in this folder.
- `news`: This is where all the news articles are stored. If you're adding new articles or updating existing ones, you will be working here.
- `projects`: Deprecated folder for old project-related content. This will be removed in future updates, so avoid making changes here.
- `research`-support: This folder holds the content for the Research Support page. You will find research-related resources and support documents here.
- `services`: Contains content for all the service-related pages. If you need to edit or add new services to the website, work here.
- `training`: This is where you manage the content for the Training page, including courses, workshops, and any related training materials.

## Running the Project Locally

To run the project locally, use the following command:

```bash
pnpm start
```

This will start a local server, and you can view the project by going to http://localhost:4321 in your web browser. Any changes you make in the src/content/ folder will be reflected here in real-time.

## Contributing

Clone the repository as shown above.

Create a new branch for your changes:

```bash
git checkout -b feature/new-feature-name
```

After making your changes, commit them:

```bash
git commit -m "Add a clear and concise commit message"
```

Push your changes and create a pull request:

```bash
git push origin feature/new-feature-name
```

That’s it! You're now ready to contribute to the project.

## Questions?

If you have any questions, feel free to reach out through the project's communication channels.

