 const errorCorrectionLevel = {
  LOW: { label: 'Low - 7%', value: 'low', short: 'L' },
  MEDIUM: { label: 'Medium - 15%', value: 'medium', short: 'M' },
  QUARTILE: { label: 'Quartile - 25%', value: 'quartile', short: 'Q' },
  HIGH: { label: 'High - 30%', value: 'high', short: 'H' },
}

const filetype = ['image/png', 'image/jpeg', 'image/webp']

export {
  errorCorrectionLevel,
  filetype
}
