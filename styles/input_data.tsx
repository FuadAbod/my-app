import { StyleSheet } from 'react-native'

const input_data_styles = StyleSheet.create({
    container: {
        padding: 16,
    },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  label: {
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  multiline: {
    textAlignVertical: 'top',
  },
});
export default input_data_styles;