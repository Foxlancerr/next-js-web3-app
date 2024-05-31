export async function authUser(): Promise<string | null> {
  if (typeof (window as any).ethereum !== 'undefined' && (window as any).ethereum.isMetaMask) {
    try {
      const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        return accounts[0];
      }
    } catch (error) {
      console.error('Error checking MetaMask connection:', error);
    }
  } else {
    console.error('MetaMask is not installed');
  }
  return null;
}
