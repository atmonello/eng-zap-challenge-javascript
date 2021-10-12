<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <v-skeleton-loader type="card, actions" />
      </v-col>
      <v-col cols="12" md="8" lg="9">
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              md="6"
              xl="3"
              v-for="card in 20"
              :key="card"
              class="mb-2"
            >
              <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>