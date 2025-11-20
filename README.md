# Random env

GitHub action to set global environment variables to random values.

![Review](https://img.shields.io/github/actions/workflow/status/JoelLefkowitz/random-env/review.yaml)
![Version](https://img.shields.io/npm/v/random-env)
![Downloads](https://img.shields.io/npm/dw/random-env)
![Size](https://img.shields.io/bundlephobia/min/random-env)
![Quality](https://img.shields.io/codacy/grade/91b70f5bf54b4f0a9bebf839321a8b8d)
![Coverage](https://img.shields.io/codacy/coverage/91b70f5bf54b4f0a9bebf839321a8b8d)

## Installing

```bash
npm install random-env
```

## Documentation

Documentation and more detailed examples are hosted on [Github Pages](https://joellefkowitz.github.io/random-env).

## Usage

```yml
steps:
  - name: Set random environment variables
    uses: joellefkowitz/random-env@v1.0.0
    with:
      names: |
        TEST_EMAIL
        TEST_PASSWORD

  - name: Print environment variables
    run: printenv
```

Example output:

```sh
TEST_EMAIL=9102634d826b733e828a19317250337aw
TEST_PASSWORD=943b9f5e0a0b3d9acbfe05779dfab69f
```

## Tooling

### Dependencies

To install dependencies:

```bash
yarn install
```

### Tests

To run tests:

```bash
yarn test
```

### Documentation

To generate the documentation locally:

```bash
yarn docs
```

### Linters

To run linters:

```bash
yarn lint
```

### Formatters

To run formatters:

```bash
yarn format
```

## Contributing

Please read this repository's [Code of Conduct](CODE_OF_CONDUCT.md) which outlines our collaboration standards and the [Changelog](CHANGELOG.md) for details on breaking changes that have been made.

This repository adheres to semantic versioning standards. For more information on semantic versioning visit [SemVer](https://semver.org).

Bump2version is used to version and tag changes. For example:

```bash
bump2version patch
```

### Contributors

- [Joel Lefkowitz](https://github.com/joellefkowitz) - Initial work

## Remarks

Lots of love to the open source community!

<div align='center'>
    <img width=200 height=200 src='https://media.giphy.com/media/osAcIGTSyeovPq6Xph/giphy.gif' alt='Be kind to your mind' />
    <img width=200 height=200 src='https://media.giphy.com/media/KEAAbQ5clGWJwuJuZB/giphy.gif' alt='Love each other' />
    <img width=200 height=200 src='https://media.giphy.com/media/WRWykrFkxJA6JJuTvc/giphy.gif' alt="It's ok to have a bad day" />
</div>
