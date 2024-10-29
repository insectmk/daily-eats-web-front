## 报错

1. 控制台报错：`Unchecked runtime.lastError: The message port closed before a response was received.`

参考[【前端异常】JavaScript错误处理：分析 Uncaught(in promise) error](https://blog.csdn.net/weixin_44299027/article/details/134382584)

```typescript
window.addEventListener('unhandledrejection', (event) => {
  console.log(event.reason);
})
```

