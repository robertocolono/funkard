interface ProfileStatus {
  hasAddress: boolean;
  hasPayment: boolean;
}

export async function checkUserProfileCompletion(): Promise<ProfileStatus> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/profile/status`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('funkard_token')}` },
    });
    
    if (!res.ok) {
      const error = await res.json();
      if (error.error === 'missing_payment_info') {
        return { hasAddress: true, hasPayment: false };
      }
      if (error.error === 'missing_address_info') {
        return { hasAddress: false, hasPayment: true };
      }
      if (error.error === 'missing_both_info') {
        return { hasAddress: false, hasPayment: false };
      }
    }
    
    const data = await res.json();
    return {
      hasAddress: data.hasAddress || false,
      hasPayment: data.hasPayment || false,
    };
  } catch (error) {
    console.error('Errore verifica profilo:', error);
    return { hasAddress: false, hasPayment: false };
  }
}
