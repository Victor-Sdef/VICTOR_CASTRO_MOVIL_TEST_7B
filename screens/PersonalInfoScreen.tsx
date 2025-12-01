import { Text, View, StyleSheet } from "react-native"
import { FormInput } from "../components/FormInput"
import { Person } from "../models/person"
import { FormButton } from "../components/FromButton";


type PersonalInfoScreenProps = {
  person: Person,
  onChange: (field: keyof Person, value: string) => void;
  onNext: () => void
}

export const PersonalInfoScreen = ({ person, onChange, onNext }: PersonalInfoScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Datos Personales</Text>
      <FormInput
        label="Nombre"
        placeholder="Ingresa tu nombre"
        value={person.firstName}
        onChangeText={value => onChange('firstName', value)}
      />
      <FormInput
        label="Apellido"
        placeholder="Ingresa tu apellido"
        value={person.lastName}
        onChangeText={value => onChange('lastName', value)}
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
