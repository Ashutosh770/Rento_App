import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const initialInvoices = [
  { id: '1', tenant: 'Vendor 1', amount: 500, status: 'Paid', date: '2024-06-01' },
  { id: '2', tenant: 'Vendor 2', amount: 750, status: 'Unpaid', date: '2024-06-15' },
];

export default function InvoiceScreen() {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [showForm, setShowForm] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    id: '',
    tenant: '',
    amount: '',
    status: '',
    date: '',
  });
  const getStatusTextStyle = (status) => {
    return {
      ...styles.invoiceText,
      color: status === 'Paid' ? 'green' : 'red',
    };
  };
  const handleCreateInvoice = () => {
    setInvoices([...invoices, newInvoice]);
    setShowForm(false);
    setNewInvoice({ id: '', tenant: '', amount: '', status: '', date: '' });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={invoices}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.invoice}>
            <Text style={styles.invoiceText}>ID: {item.id}</Text>
            <Text style={styles.invoiceText}>Tenant: {item.tenant}</Text>
            <Text style={[styles.invoiceText, styles.amountText]}>Amount: ₹.{item.amount}</Text>
            <Text style={getStatusTextStyle(item.status)}>Status: {item.status}</Text>
            <Text style={styles.invoiceText}>Date: {item.date}</Text>
          </View>
        )}
      />
      {showForm ? (
        <View>
          <TextInput
            style={styles.input}
            placeholder="ID"
            value={newInvoice.id}
            onChangeText={id => setNewInvoice({ ...newInvoice, id })}
          />
          <TextInput
            style={styles.input}
            placeholder="Tenant"
            value={newInvoice.tenant}
            onChangeText={tenant => setNewInvoice({ ...newInvoice, tenant })}
          />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={newInvoice.amount}
            onChangeText={amount => setNewInvoice({ ...newInvoice, amount })}
          />
          <TextInput
            style={styles.input}
            placeholder="Status"
            value={newInvoice.status}
            onChangeText={status => setNewInvoice({ ...newInvoice, status })}
          />
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={newInvoice.date}
            onChangeText={date => setNewInvoice({ ...newInvoice, date })}
          />
          <Button title="Submit" onPress={handleCreateInvoice} />
        </View>
      ) : (
        <Button title="Create Invoice" onPress={() => setShowForm(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  invoice: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  invoiceText: {
    fontSize: 16,
    color: '#333',
  },
  amountText: {
    color: 'green', // Color for amount
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: '#333',
  },
});
