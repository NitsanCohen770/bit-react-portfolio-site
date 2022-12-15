import { themeCreator } from "@showoff/design.theme.theme-creator";
import { alpha } from "@mui/material";
import { Theme } from "@mui/material";
import { getCircularXXFontFace } from "@showoff/design.theme.fonts";

export function darkTheme(): Theme {
  return themeCreator({
    palette: {
      primary: {
        main: '#CBF382'
      },
      text: {
        primary: '#E6E6E8',
        secondary: '#B5B4B9'
      },
      background: {
        default: '#070414',
        paper: '#1B1827',
      },
      divider: '#2F2C3A'
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
            ":hover": {
              backgroundColor: alpha('#CBF382', 0.35)
            },
            color: '#070414'
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
          },
          disabled: {
            backgroundColor: alpha('#CBF382', 0.35)
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
            color: '#CBF382',
            backgroundColor: '#2F2C3A',
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
            backgroundColor: '#2F2C3A',
            border: '1px solid #2F2C3A',
            color: '#E6E6E8'
          }
        }
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            borderColor: '#83828A',
            transition: 'all 0.3s ease',
            textTransform: 'none',
            height: '40px',
            color: '#83828A !important',
            '& .MuiTypography-root': {
              color: '#83828A',
            },
            '&.Mui-selected': {
              backgroundColor: '#CBF382',
              color: '#070414 !important',
              '&:hover': {
                backgroundColor: alpha('#CBF382', 0.8),
              },
              '& .MuiTypography-root': {
                color: '#070414',
              }
            }
          }
        }
      },
      MuiCssBaseline: {
        styleOverrides: getCircularXXFontFace()
      },
    },
    typography: {
      button: {
        fontWeight: 500,
        color: '#070414'
      },
      allVariants: {
        color: '#EDEDED',
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
