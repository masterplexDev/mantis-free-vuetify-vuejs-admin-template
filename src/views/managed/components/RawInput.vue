
<template>
    <v-card class="mt-5"  title="원재료 입고 > 데이터 입력" flat>
        <v-container fluid>
            <v-row>
            <v-col cols="2">
                <v-list-subheader>Prefix for dollar currency</v-list-subheader>
            </v-col>
            <v-col cols="10">
                <v-text-field
                label="pH"
                model-value="John Doe"
                variant="outlined"
                >
                </v-text-field>
            </v-col>
            </v-row>

            <v-row>
            <v-col cols="4">
                <v-list-subheader>Suffix for weight</v-list-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field
                label="Weight"
                model-value="28.00"
                suffix="lbs"
                ></v-text-field>
            </v-col>
            </v-row>

            <v-row>
            <v-col cols="4">
                <v-list-subheader>Suffix for email domain</v-list-subheader>
            </v-col>

            <v-col cols="8">
                <v-text-field
                label="Email address"
                model-value="example"
                suffix="@gmail.com"
                ></v-text-field>
            </v-col>
            </v-row>

            <v-row>
            <v-col cols="4">
                <v-list-subheader>Suffix for time zone</v-list-subheader>
            </v-col>

            <v-col cols="8">
                <v-text-field
                label="Label Text"
                model-value="12:30:00"
                suffix="PST"
                type="time"
                ></v-text-field>
            </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>