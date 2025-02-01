# `unique-id-twig-extension`

Generates a unique identifier and does not reuse the same identifier used elsewhere on the same page. Optionally, pass in a parameter and it will generate with a prefix.

## Usage

```

// Generates a unique ID.
// Outputs: qv1qqdeyms (or other random string)
{{ uniqueId() }}

// Generates a unique ID with a prefix.
// Outputs: prefix-yq9pqk9moz (or other random string, prefixed)
{{ uniqueId('prefix') }}

```
