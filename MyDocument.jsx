import React from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
const MyDoc = () => (
  <Document>
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
      <Text>Name:Sonia</Text>
    </View>
    <View style={styles.section}>
      <Text>Nice to see</Text>
    </View>
  </Page>
</Document>
);
const MyDocument = () => {
  <div>
  <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Download now!'
    }
  </PDFDownloadLink>
</div>
};

export default MyDocument;
