import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Person } from "../models/person";
import { FormButton } from "../components/FromButton";

type SummaryScreenProps = {
    person: Person;
    onRestart?: () => void;
}

export const SummaryScreen = ({ person, onRestart }: SummaryScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resumen</Text>
            <View style={styles.card}>
                <Text style={styles.row}>Nombre: {person.firstName}</Text>
                <Text style={styles.row}>Apellido: {person.lastName}</Text>
                <Text style={styles.row}>Correo: {person.email}</Text>
                <Text style={styles.row}>Teléfono: {person.phone}</Text>
            </View>
            <FormButton label="Volver al inicio" onPress={onRestart} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 16,
    },
    card: {
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
        backgroundColor: 'white',
    },
    row: {
        fontSize: 16,
        marginBottom: 8,
        color: '#111827',
    }
})