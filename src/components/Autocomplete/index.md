---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# Autocomplete 带验证的输入框
## 代码演示


```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Demo, Autocomplete } from 'fbm-ui'

export default () => {
  const top100Films = [
    { label: 'An', year: 1994 },
    { label: 'Bn', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ];
  
  return (
    <Demo>
      <Autocomplete
        multiple
        limitTags={1}
        options={top100Films}
      />
    </Demo>
  )
}

```