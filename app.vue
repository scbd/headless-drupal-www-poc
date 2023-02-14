<template>
  <section >
    <PageHeader/>
    <PageHeroHeader/> 
    <main>
      <div class="container-fluid">
        <div class="row">
          <PageSideBar />
          <div class="article-section">
              <NuxtPage/>
          </div>
        </div>
      </div>
    </main>
    <PageFooter/>
  </section>
</template>