import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
  },
  paper: {
    padding: theme.spacing(1),
    '& > div': {
      marginBottom: theme.spacing(2),
    },
  },
  rightActions: {
    textAlign: 'right',
  },
  cancelButton: {
    color: theme.palette.error.main,
  },
}));

export const Schedule: React.FC = () => {
  const styles = useStyles();
  return (
    <React.Fragment>
      <Container className={styles.root} maxWidth="sm">
        <Paper className={styles.paper}>
          <Typography variant="h6" gutterBottom>
            シフト日時
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Button className={styles.cancelButton} startIcon={<DeleteIcon />}>
              削除
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DoneIcon />}
            >
              保存
            </Button>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
};
