import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import { Lock } from '@mui/icons-material';

interface OTPInputProps {
  length?: number;
  onChange?: (otp: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onChange }) => {
  const [otp, setOtp] = React.useState(Array(length).fill(''));
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    onChange?.(newOtp.join(''));
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {otp.map((digit, index) => (
        <TextField
          key={index}
          inputRef={(ref) => (inputRefs.current[index] = ref)}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          inputProps={{
            maxLength: 1,
            style: { textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' },
          }}
          sx={{ width: 50 }}
          type="password"
        />
      ))}
    </Box>
  );
};

export default OTPInput;
