# Random env

Github action to set global environment variables to random values.

## Status

| Source     | Shields                                                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| Project    | ![release][release_shield] ![license][license_shield] ![lines][lines_shield] ![languages][languages_shield]                 |
| Health     | ![codacy][codacy_shield] ![codacy_coverage][codacy_coverage_shield]                                                         |
| Repository | ![issues][issues_shield] ![issues_closed][issues_closed_shield] ![pulls][pulls_shield] ![pulls_closed][pulls_closed_shield] |
| Activity   | ![contributors][contributors_shield] ![monthly_commits][monthly_commits_shield] ![last_commit][last_commit_shield]          |

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

```sh
TEST_EMAIL=9102634d826b733e828a19317250337aw
TEST_PASSWORD=943b9f5e0a0b3d9acbfe05779dfab69f
```

## Tests

To run unit tests:

```bash
yarn test
```

To run the test action locally:

```bash
act -j test
```

## Tooling

To run linters:

```bash
yarn lint
```

To run formatters:

```bash
yarn format
```

## Continuous integration

This repository uses github actions to lint and test each commit. Formatting tasks and writing/generating documentation must be done before committing new code.

## Versioning

This repository adheres to semantic versioning standards.
For more information on semantic versioning visit [SemVer][semver].

Bump2version is used to version and tag changes.
For example:

```bash
bump2version patch
```

## Changelog

Please read this repository's [CHANGELOG](CHANGELOG.md) for details on changes that have been made.

## Contributing

Please read this repository's guidelines on [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Contributors

- **Joel Lefkowitz** - _Initial work_ - [Joel Lefkowitz][author]

[![Buy Me A Coffee][coffee_button]][coffee]

## Remarks

Lots of love to the open source community!

![Be kind][be_kind]

<!-- Public links -->

[semver]: http://semver.org/

<!-- External links -->

[coffee]: https://www.buymeacoffee.com/joellefkowitz
[coffee_button]: https://cdn.buymeacoffee.com/buttons/default-blue.png
[be_kind]: https://media.giphy.com/media/osAcIGTSyeovPq6Xph/giphy.gif

<!-- Acknowledgments -->

[author]: https://github.com/joellefkowitz

<!-- Project shields -->

[release_shield]: https://img.shields.io/github/v/tag/joellefkowitz/random-env
[license_shield]: https://img.shields.io/github/license/joellefkowitz/random-env
[lines_shield]: https://img.shields.io/tokei/lines/github/joellefkowitz/random-env
[languages_shield]: https://img.shields.io/github/languages/count/joellefkowitz/random-env

<!-- Health shields -->

[codacy_shield]: https://img.shields.io/codacy/grade/91b70f5bf54b4f0a9bebf839321a8b8d
[codacy_coverage_shield]: https://img.shields.io/codacy/coverage/91b70f5bf54b4f0a9bebf839321a8b8d

<!-- Repository shields -->

[issues_shield]: https://img.shields.io/github/issues/joellefkowitz/random-env
[issues_closed_shield]: https://img.shields.io/github/issues-closed/joellefkowitz/random-env
[pulls_shield]: https://img.shields.io/github/issues-pr/joellefkowitz/random-env
[pulls_closed_shield]: https://img.shields.io/github/issues-pr-closed/joellefkowitz/random-env

<!-- Activity shields -->

[contributors_shield]: https://img.shields.io/github/contributors/joellefkowitz/random-env
[monthly_commits_shield]: https://img.shields.io/github/commit-activity/m/joellefkowitz/random-env
[last_commit_shield]: https://img.shields.io/github/last-commit/joellefkowitz/random-env
