import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { useUser } from "../../providers/User";
import { Redirect } from "react-router-dom";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Campo obrigatório"),
  });

  const { login, token } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signIn = (data) => {
    login(data);
  };

  //   if (token) {
  //     return <Redirect to="/dashboard" />;
  //   }

  return (
    <Container
      maxWidth="xs"
      sx={{
        bgcolor: "#cbcbcb",
        p: 3,
      }}
    >
      <h1 style={{ color: "#222" }}>Login</h1>

      <Box component="form" onSubmit={handleSubmit(signIn)}>
        <Stack>
          <TextField
            label="Email"
            type="email"
            {...register("email")}
            error={!!errors?.email} // boolean = false e true
            helperText={errors.email?.message}
          />
          <TextField
            label="Senha"
            type="password"
            {...register("password")}
            error={!!errors?.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Login;
