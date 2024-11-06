<script setup lang="ts"></script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <section class="content">
      <nav>
        <button>Refresh</button>
        <RouterLink to="/stock/add" class="button">add</RouterLink>
        <button>delete</button>
      </nav>
      <div class="error">Erreur</div>
      <table>
        <thead>
          <tr>
            <th class="name">Name</th>
            <th class="price">price</th>
            <th class="qty">Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="name">BTC</td>
            <td class="price">72k</td>
            <td class="qty">1</td>
          </tr>
          <tr>
            <td class="name">ETH</td>
            <td class="price">5k</td>
            <td class="qty">2</td>
          </tr>
          <tr>
            <td class="name">TAO</td>
            <td class="price">1k</td>
            <td class="qty">3</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped>
nav {
  display: flex;
  gap: 0.5rem;
}

.error {
  height: 2rem;
}

.name {
  text-align: left;
}
td.qty,
td.price {
  text-align: right;
}
</style>
