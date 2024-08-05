# fake_sso

## Setup

To enable the fake SSO method locally, take the following steps:

1. Add the following line to `/etc/hosts`:

```
127.0.0.1 host.docker.internal
```

2. In the main repo, enable the `fake_sso` feature flag:

```
make feature-toggle feature=fake_sso enabled=true
```

3. In this repo, install the dependencies:

```
npm i
```

4. In this repo, create a file called `back-secret.env` in the `env_files` folder, and make sure it has the correct `FAKE_SSO_JWT_SECRET`. It should match the one in `env_files/back-secret.env` in the main repo.

5. In both repos, run the docker compose file:

```
docker compose up
```

## Issues

NOTE: If you have `BASE_DEV_URI` set for use with localtunnel in back-secrets.env, this can conflict with this implementation. Best to disable.

## Other useful resources

- https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc
