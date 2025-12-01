import { View, Text, StyleSheet } from "react-native";
import { Person } from "../models/person";
import React from "react";
import { FormInput } from "../components/FormInput";
import { FormButton } from "../components/FromButton";

type ContactInfoScreenProps = {
    person: Person;
    onChange: (field: keyof Person, value: string) => void;
    onNext: () => void
}
export const ContactInfoScreen = ({ person, onChange, onNext }: ContactInfoScreenProps) => {
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Contacto</Text>
            <FormInput
                label="Correo"
                placeholder='example@example.com'
                value={person.email}
                onChangeText={value => onChange('email', value)}
            />
            <FormInput
                label="Telefono"
                placeholder='593 999 999'
                value={person.phone}
                onChangeText={value => onChange('phone', value)}
            />
            <FormButton label="Siguiente" onPress={onNext} />
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
})