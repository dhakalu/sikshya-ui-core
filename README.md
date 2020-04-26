# Sikshya UI Core

This is react component library. This project was created using `neutrinojs`.

## Design Patterns

We will be using [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design/)

## Branching Strategy

* Master: Code that is running in production
* Release: Code that is QA verified and is scheduled to go to prodution next.
* develop: Code that developer is satisfied with
* feature: Code that developer is currently working on

The default branch for this project is `develop`. This branch is proteded and would require at least one approval before merging into this branch.

### features

```bash
git checkout -b feature/SIK-1-button-componet 

```

A new branch must be created from `develop` branch for any new feature requested/added. A `pull/merge` request must be created when the code in `feature` is ready to merge  to `develop` branch. Test cases must be created on the `feature` branch for any new changes made on that branch. Testing must be run and pass in `feature` branch before making a `pull` request. Once the development for the `feature` completes and the code gets merged to develop, the `feature` branch must be deleted. Each *feature* branch will start with `feature/`

### Bugs/Fixes

A new branch must be created for each fixes we do. If we are fixing bug that exist either in `dev` or `test` environments, the branch must be created from `develop`. The branch name foloow the pattern `fixes/SIK-*` . If we are fixing any issues/ bugs in production, we must create a new branch that originates from `master`. Hot fix branch name must folow the pattern `hotfix/SIK-*`. Once hot fix is ready it will merged to both `develop` and `master`.

### Releases

When a group of `features/` are merged to develop and QA verifies the features, the `develop` branch can be merged to `release/<version>`. After code gets merged to `release` branch UAT testing can be done. After UAT verifies the items in `release` branch are working as expected, the `release` branch gets merged into both `develop` and `master`
 
### Peer Review

In order to make peer reviews effective, each merge/pull request must small.
If a *feature* is too big it needs to be splitted into smaller *sub-features*.

