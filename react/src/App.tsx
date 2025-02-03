import AppLayout from '@/components/AppLayout';
import Router from './router/router';
import { NuqsAdapter } from 'nuqs/adapters/react';

function App() {
  return (
    <NuqsAdapter>
      <AppLayout>
        <Router />
      </AppLayout>
    </NuqsAdapter>
  );
}

export default App;
