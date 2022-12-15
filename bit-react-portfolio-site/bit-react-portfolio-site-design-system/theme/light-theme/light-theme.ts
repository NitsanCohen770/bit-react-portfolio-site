import { themeCreator } from "@enlear/bit-react-portfolio-site-design-system.theme.theme-creator";
import { alpha } from "@mui/material";
import { Theme } from "@mui/material";

export function lightTheme(): Theme {
  return themeCreator({
    palette: {
      primary: {
        main: '#6C5CE7'
      },
      background: {
        default: '#FFFFFF',
        paper: '#FFFFFF'
      },
      text: {
        primary: '#2B2B2B',
      },
      divider: '#BABEC9'
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
          variant: 'contained'
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            color: '#FFFFFF',
          },
          sizeSmall: {
            padding: '6px 16px'
          },
          sizeMedium: {
            padding: '8px 20px'
          },
          sizeLarge: {
            padding: '11px 24px'
          },
          textSizeSmall: {
            padding: '7px 12px'
          },
          textSizeMedium: {
            padding: '9px 16px'
          },
          textSizeLarge: {
            padding: '12px 16px'
          }
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            color: '#6C5CE7',
            fontWeight: 700,
            height: '24px',
            borderRadius: '6px',
            padding: '4px 8px',
            verticalAlign: 'middle',
            alignItems: 'center',
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: 8
          },
          sizeSmall: {
            padding: 4
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            borderColor: '#EDEDED',
          },
          input: {
            '&::placeholder': {
              color: '#707279',
            },
          }
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#707279',
          }
        }
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            borderColor: '#EDEDED',
            transition: 'all 0.3s ease',
            textTransform: 'none',
            height: '40px',
            '&.Mui-selected': {
              backgroundColor: '#6C5CE7',
              color: '#EDEDED !important',
              '&:hover': {
                backgroundColor: alpha('#6C5CE7', 0.8),
              },
              '& .MuiTypography-root': {
                color: '#EDEDED',
              }
            }
          }
        }
      }
    },
    typography: {
      button: {
        fontWeight: 600
      },
      allVariants: {
        color: '#2B2B2B',
      },
      fontFamily: 'CircularXX',
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '32px',
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '32px',
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: '32px',
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: '32px',
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.5px',
        lineHeight: 2.5,
        textTransform: 'uppercase'
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.66
      },
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.375
      },
      h2: {
        fontWeight: 700,
        fontSize: '3rem',
        lineHeight: 1.375
      },
      h3: {
        fontWeight: 700,
        fontSize: '2.25rem',
        lineHeight: 1.375
      },
      h4: {
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.375
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.375
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.375
      }
    },
  });
}
