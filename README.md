# sample_recoil
Recoilを使ったサンプルアプリ

## 概要

Recoilを使えばReactでバケツリレーしなくて済む

![alt text](/docs/image.png)

## 使い方
```
npm install recoil
```

はじめに、親コンポーネントをRecoilRootで囲む。

**定義する側**

atomを使って定義する

**使う側**

- useRecoilState: useStateとほぼ同じ。引数にatomを指定する。
- useRecoilValue: 値の取得だけ。
- useSetRecoilState: 更新だけ。

だいたいはuseRecoilStateを使っておけば良さげ。
