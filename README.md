# create-esp-app

This is an npm package that allows you to quickly create a Next.js application with a pre-configured example folder. The example folder includes a ready-to-use Next.js project with some basic components and pages to get you started.

## Usage

To create a new Next.js project with the pre-configured example folder, run the following command:

```bash
npx create-esp-app
```

This will prompt you to enter a name for your project, and then it will create a new directory with that name and set up an opinionated Next.js project.

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
│   │       ├── github.tsx
│   │       ├── google.tsx
│   │       ├── home.tsx
│   │       ├── link.tsx
│   │       ├── linkedin.tsx
│   │       ├── logout.tsx
│   │       ├── moon.tsx
│   │       ├── pencil.tsx
│   │       ├── search.tsx
│   │       ├── sun.tsx
│   │       ├── trash.tsx
│   │       ├── twitter.tsx
│   │       ├── user.tsx
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
