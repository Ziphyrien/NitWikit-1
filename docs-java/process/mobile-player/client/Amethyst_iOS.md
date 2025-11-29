---
title: 在 iOS 上安装 Amethyst
sidebar_position: 3
---

# 在 iOS 上安装 Amethyst

本文档将指导您如何在 iOS 设备上安装 Amethyst。请根据您的设备情况和个人偏好选择合适的方法。

## 方法一：使用 AltStore (Windows)

> **注意**：Windows 用户目前无法在 iOS 17 上使用 AltJIT。

### 1. 准备工作
1. 下载并安装 [爱思助手电脑端](https://www.i4.cn)。
2. 打开爱思助手，点击“工具箱” -> “iTunes 及驱动” -> “安装 iTunes”。
   ![](./images/i4_1.png)
   ![](./images/i4_2.png)
   ![](./images/i4_3.png)
3. 下载并安装 [iCloud 电脑端](https://updates.cdn-apple.com/2020/windows/001-39935-20200911-1A70AA56-F448-11EA-8CC0-99D41950005E/iCloudSetup.exe)。
4. 下载 [AltServer](https://cdn.altstore.io/file/altstore/altinstaller.zip)。
5. 解压 `AltInstaller.zip` 并运行 `Setup.exe` 完成安装。

### 2. 安装 AltStore 到设备
1. 将您的 iOS 设备连接到电脑，并确保已解锁。
2. 打开 iTunes，在设备摘要页面勾选“通过 Wi-Fi 与此 iPhone 同步”。
   ![](./images/iTunes_1.png)
   ![](./images/iTunes_2.png)
3. 点击电脑右下角任务栏中的 AltServer 图标，选择 **Install AltStore**，然后选择您的设备。
   ![](./images/Alt_1.png)
4. 输入您的 Apple ID 和密码。
   ![](./images/Alt_2.png)
5. 等待安装完成通知。
6. 在 iOS 设备上，前往 **设置** -> **通用** -> **VPN与设备管理** (或描述文件与设备管理)，点击您的 Apple ID 并选择 **信任**。
   > **提示**：iOS 16 及以上用户需前往 **设置** -> **隐私与安全** -> **开发者模式** 并开启。
7. 下载 [Amethyst IPA 安装包](https://github.com/AngelAuraMC/Amethyst-iOS/actions) (需登录 GitHub)。

### 3. 开启 JIT (Just-In-Time) 加速
**手机端开启：**
1. 打开 AltStore 的 "My Apps" 标签页，长按 Amethyst。
2. 选择 "Enable JIT"。

**电脑端开启 (备选)：**
1. 确保 Amethyst 在手机前台运行。
2. 点击电脑任务栏 AltServer 图标 -> **Enable JIT** -> 选择您的设备 -> 选择 **Amethyst**。

---

## 方法二：使用 TrollStore (巨魔商店)

TrollStore 是一个永久签名的工具，推荐符合版本的设备使用。

### 支持范围
| 处理器 | 支持版本 |
| :--- | :--- |
| **A8** | iOS 14.0 beta 2 ~ 15.8.4 |
| **A9 - A11** | iOS 14.0 beta 2 ~ 17.0 (不含 16.7.x) |
| **A12 - A17 / M1 - M2** | iOS 14.0 beta 2 ~ 17.0 (不含 16.7.x) |

### 安装方案 A：使用 TrollInstallerX
**适用范围：**
- iOS 14.0 - 15.1.1 (所有设备)
- iOS 15.2 - 16.6.1 (A9 及以上)
- iOS 17.0 beta 1 - 17.0 beta 4 (A10 及以上)

**步骤：**
1. 下载 [TrollInstallerX IPA](https://github.com/alfiecg24/TrollInstallerX/releases/latest/download/TrollInstallerX.ipa)。
2. 使用爱思助手或其他签名工具将 `TrollInstallerX.ipa` 安装到手机 (参考方法一中的签名步骤)。
3. 在手机上信任开发者证书。
4. 打开 **TrollInstallerX**，点击 **Install TrollStore**。
5. 当提示选择 "Persistence Helper" 时，选择一个不常用的系统应用 (如 **Tips/提示**)。
6. **(仅限部分版本)**：如果是 A15/A16/M2 (iOS 16.5.1) 或 A12+ (iOS 16.6-16.6.1)，需打开刚才选择的 Persistence Helper 应用，点击 **Install TrollStore**。

### 安装方案 B：使用 TrollHelperOTA
**适用范围：**
- iOS 15.0 - 15.5 beta 4, 15.6 beta 1 - 15.6 beta 3 (A11 及以下)
- iOS 14.0 beta 2 - 15.6.1, 16.0 beta 1 - 16.0 beta 3 (A12 及以上)

**步骤：**
1. 在 Safari 浏览器中打开 [此链接](https://jailbreaks.app/cdn/plists/TrollHelper.plist)。
2. 点击安装，设备上会出现 "GTA Car Tracker"。
3. 打开 "GTA Car Tracker"，点击 **Register Persistence Helper**，然后点击 **Install TrollStore**。

### 安装方案 C：使用 TrollRestore
**适用范围：**
- iOS 16.7 RC
- iOS 17.0 beta 5 ~ 17.0

**步骤：**
1. 安装 [Python 3](https://www.python.org/downloads/)。
2. 确保电脑已安装 iTunes。
3. 下载 [TrollRestore](https://github.com/JJTech0130/TrollRestore/releases/download/1.0/TrollRestore.exe)。
4. 连接设备并解锁。
5. 运行 `TrollRestore.exe`，输入要覆盖的系统应用名称 (例如 `Tips`) 并回车。
6. 手机重启后，打开被覆盖的应用 (如 Tips)，点击 **Install TrollStore**。

### 最后一步：安装 Amethyst
1. 下载 [Amethyst TIPA 安装包](https://github.com/AngelAuraMC/Amethyst-iOS/actions) (需登录 GitHub)。
2. 使用 TrollStore 打开并安装下载的文件。

---

## 方法三：使用牛蛙助手

> **注意**：此方法操作简单但包含较多广告。

1. 电脑下载 [牛蛙助手](https://ios222.com/) 并安装。
2. 确保电脑已安装 iTunes。
3. 连接设备，打开牛蛙助手点击“立即安装”。
4. 手机上信任描述文件 (设置 -> 通用 -> VPN与设备管理)。
5. 打开手机版牛蛙助手，按照提示安装证书 (IPA签名 -> 证书 -> + -> Apple 证书，输入 Apple ID)。
6. 导入 [Amethyst IPA](https://github.com/AngelAuraMC/Amethyst-iOS/actions)。
7. 在牛蛙助手中选择 Amethyst 进行签名并安装。
8. 启动游戏前，在牛蛙助手中选择 **JIT** -> **Amethyst** -> **使用 JIT 启动**。

---

## 方法四：越狱

:::warning
**风险提示**
越狱会获取设备最高权限，请确保您了解相关风险。本文档不对设备安全负责。
:::

### 常见越狱工具

| 越狱工具 | 支持版本 (iOS/iPadOS) | 支持芯片 |
| :--- | :--- | :--- |
| [Electra](https://coolstar.org/electra/) | 11.0 ~ 11.1.2 | A9 - A11 |
| [Chimera](https://chimera.coolstar.org/) | 12.0 ~ 12.5.5 | A9 - A12 |
| [Odyssey](https://theodyssey.dev/) | 13.0 ~ 13.7 | A9 - A13 |
| [Unc0ver](https://unc0ver.dev/) | 11.0 ~ 14.8 | A9 - A14 |
| [Taurine](https://taurine.app/) | 14.0 ~ 14.8.1 | A9 - A12 |
| [Dopamine](https://ellekit.space/dopamine/) | 15.0 ~ 16.6.1* | A12 - A16, M1 - M2 |
| [Checkra1n](https://checkra.in/) | 12.0 ~ 15.4.1 | A7 - A11 |
| [Palera1n](https://palera.in/) | 15.0 ~ ? | A7 - A11 |

*\*注：Dopamine 对部分 iOS 16 版本及芯片支持有限。*

### 安装步骤
1. 根据您的设备版本选择合适的越狱工具。
2. 大多数越狱工具 (IPA格式) 可参考 **方法一** 或 **方法二** 的签名安装流程进行安装。
3. 在手机上打开越狱工具，点击 **Jailbreak** 开始越狱。
4. 越狱成功后，打开包管理器 (Sileo 或 Cydia)。
5. 安装 `AppSync Unified` 插件 (通常需要添加源 `https://cydia.akemi.ai/`)。
6. 下载 Amethyst IPA 并直接安装。
