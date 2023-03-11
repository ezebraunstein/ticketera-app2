/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
      id
      QR
      valido
      dni
      email
      tipoentradaID
      createdAt
      updatedAt
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      id
      QR
      valido
      dni
      email
      tipoentradaID
      createdAt
      updatedAt
    }
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
      id
      QR
      valido
      dni
      email
      tipoentradaID
      createdAt
      updatedAt
    }
  }
`;
export const createTipoEntrada = /* GraphQL */ `
  mutation CreateTipoEntrada(
    $input: CreateTipoEntradaInput!
    $condition: ModelTipoEntradaConditionInput
  ) {
    createTipoEntrada(input: $input, condition: $condition) {
      id
      monto
      descripcion
      cantidad
      activo
      fechaInicio
      fechaFin
      eventoID
      Tickets {
        items {
          id
          QR
          valido
          dni
          email
          tipoentradaID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTipoEntrada = /* GraphQL */ `
  mutation UpdateTipoEntrada(
    $input: UpdateTipoEntradaInput!
    $condition: ModelTipoEntradaConditionInput
  ) {
    updateTipoEntrada(input: $input, condition: $condition) {
      id
      monto
      descripcion
      cantidad
      activo
      fechaInicio
      fechaFin
      eventoID
      Tickets {
        items {
          id
          QR
          valido
          dni
          email
          tipoentradaID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTipoEntrada = /* GraphQL */ `
  mutation DeleteTipoEntrada(
    $input: DeleteTipoEntradaInput!
    $condition: ModelTipoEntradaConditionInput
  ) {
    deleteTipoEntrada(input: $input, condition: $condition) {
      id
      monto
      descripcion
      cantidad
      activo
      fechaInicio
      fechaFin
      eventoID
      Tickets {
        items {
          id
          QR
          valido
          dni
          email
          tipoentradaID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEvento = /* GraphQL */ `
  mutation CreateEvento(
    $input: CreateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    createEvento(input: $input, condition: $condition) {
      id
      nombreEvento
      fechaInicio
      fechaFin
      fechaAlta
      fechaBaja
      descripcion
      imagenBanner
      imagenMini
      TipoEntradas {
        items {
          id
          monto
          descripcion
          cantidad
          activo
          fechaInicio
          fechaFin
          eventoID
          createdAt
          updatedAt
        }
        nextToken
      }
      usuarioID
      createdAt
      updatedAt
    }
  }
`;
export const updateEvento = /* GraphQL */ `
  mutation UpdateEvento(
    $input: UpdateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    updateEvento(input: $input, condition: $condition) {
      id
      nombreEvento
      fechaInicio
      fechaFin
      fechaAlta
      fechaBaja
      descripcion
      imagenBanner
      imagenMini
      TipoEntradas {
        items {
          id
          monto
          descripcion
          cantidad
          activo
          fechaInicio
          fechaFin
          eventoID
          createdAt
          updatedAt
        }
        nextToken
      }
      usuarioID
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvento = /* GraphQL */ `
  mutation DeleteEvento(
    $input: DeleteEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    deleteEvento(input: $input, condition: $condition) {
      id
      nombreEvento
      fechaInicio
      fechaFin
      fechaAlta
      fechaBaja
      descripcion
      imagenBanner
      imagenMini
      TipoEntradas {
        items {
          id
          monto
          descripcion
          cantidad
          activo
          fechaInicio
          fechaFin
          eventoID
          createdAt
          updatedAt
        }
        nextToken
      }
      usuarioID
      createdAt
      updatedAt
    }
  }
`;
export const createUsuario = /* GraphQL */ `
  mutation CreateUsuario(
    $input: CreateUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    createUsuario(input: $input, condition: $condition) {
      id
      nombre
      apellido
      dni
      email
      facturacion
      Eventos {
        items {
          id
          nombreEvento
          fechaInicio
          fechaFin
          fechaAlta
          fechaBaja
          descripcion
          imagenBanner
          imagenMini
          usuarioID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUsuario = /* GraphQL */ `
  mutation UpdateUsuario(
    $input: UpdateUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    updateUsuario(input: $input, condition: $condition) {
      id
      nombre
      apellido
      dni
      email
      facturacion
      Eventos {
        items {
          id
          nombreEvento
          fechaInicio
          fechaFin
          fechaAlta
          fechaBaja
          descripcion
          imagenBanner
          imagenMini
          usuarioID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsuario = /* GraphQL */ `
  mutation DeleteUsuario(
    $input: DeleteUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    deleteUsuario(input: $input, condition: $condition) {
      id
      nombre
      apellido
      dni
      email
      facturacion
      Eventos {
        items {
          id
          nombreEvento
          fechaInicio
          fechaFin
          fechaAlta
          fechaBaja
          descripcion
          imagenBanner
          imagenMini
          usuarioID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
