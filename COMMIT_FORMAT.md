# Commit format

## Committing Code Changes

The commit messages are critical for allowing the [Semantic Releases](https://semantic-release.gitbook.io/) to work correctly. We use the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) commit message format.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

#### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (this correlates with `PATCH` in semantic versioning)
- **ci**: Changes to our CI configuration files and scripts (no version changes)
- **docs**: Documentation only changes (no version changes)
- **feat**: A new feature (this correlates with `MINOR` in semantic versioning).
- **fix**: A bug fix (this correlates with `PATCH` in semantic versioning).
- **perf**: A code change that improves performance (this correlates with `PATCH` in semantic versioning).
- **refactor**: A code change that neither fixes a bug nor adds a feature (no version changes)
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) (no version changes)
- **test**: Adding missing tests or correcting existing tests (no version changes)
- **revert**: Reverts a previous commit (this correlates with `PATCH` in semantic versioning).

#### Description

The Description contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Body (optional)

Use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer (optional)

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

### Breaking Changes

A commit that has the text `BREAKING CHANGE:` at the beginning of its optional body or footer section introduces a breaking API change (correlating with `MAJOR` in semantic versioning). A BREAKING CHANGE can be part of commits of any type.

should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Examples

[see examples](https://www.conventionalcommits.org/en/v1.0.0/#examples)

## Changelog

The changelog.md is automatically generated from the following types of commits:

- `feat`
- `fix`
- `perf`
- `revert`

In addition to these types, any `breaking change` will also be added to the changelog.
