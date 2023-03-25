# 如何在 Angular 中使用 Standalone Components

本篇將要紀錄如何使 Angular 15 環境中使用 Standlone component。從版本 14 起就開始支援 Standalong component，Angular 15則正式的引入了獨立組件作為構建無模塊應用程序的簡單方法。獨立組件的好處之一是它們使新開發人員更容易學習和使用 Angular，因為它們可以不用使用到 NgModule。

Angular 從第二個版本起，@NgModule就已是一個重要的核必功能，透過 @NgModule 為一個個單位來組織我們的應用程式，包含整個應用程式的啟動，所以每個 angular 應用程式都至少要有一個模組（也稱為根模組），由此可見它的重要性。說它是 Angular 的特色之一一點也不為過。但近年來這個特色功能卻也成為其他類似架構的攻擊目標，為了使系統支援更多樣化，Angular 15 正式引入了 Standalone 的各式運用。

在本篇筆記中會提及如何建立及使用一個 Standalone component、如何在一個 Standalone component中去使用另一個 Standalone 子元件、如何在原有模式中(有 @NgModule)中載入 Standalong component，到最後如何在一個專案中完全不使用到 @NgModule 功能。