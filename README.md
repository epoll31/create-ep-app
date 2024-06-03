# create-esp-app

This is an npm package that allows you to quickly create a opinionated Next.js applications. For more information on the opinions, see the [example folder](https://github.com/epoll31/create-esp-app/tree/main/example).

## Usage

To create a new Next.js project with the pre-configured example folder, run the following command:

```bash
npx create-esp-app <project-name>
```

or

```bash
npx create-esp-app
```

Then it will create a new directory with that name and set up the opinionated Next.js project.

Note: if you don't specify a name, the command will prompt you to enter one.

## Example Folder

The example folder contains a basic Next.js project structure with the following files and directories:

```
.
├── .eslintrc.json
├── .gitignore
├── README.md
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   └── favicon.ico
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── providers.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components
│   │   └── icons
│   │       ├── chevron-up.tsx
│   │       ├── gear.tsx
│   │       └── (...)
│   └── utils
│       └── cn.ts
├── tailwind.config.ts
└── tsconfig.json
```

The `src/` directory contains the main application code:

- `app/`: Contains the Next.js app files, including the layout, pages, providers, and configuration for robots and sitemap.
- `components/icons/`: Contains reusable React icon components.
- `utils/`: Contains utility functions or helpers.

You can modify or replace these files as needed to suit your project requirements.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
