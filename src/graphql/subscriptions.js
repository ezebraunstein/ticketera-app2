/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket($filter: ModelSubscriptionTicketFilterInput) {
    onCreateTicket(filter: $filter) {
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket($filter: ModelSubscriptionTicketFilterInput) {
    onUpdateTicket(filter: $filter) {
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket($filter: ModelSubscriptionTicketFilterInput) {
    onDeleteTicket(filter: $filter) {
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
export const onCreateTipoEntrada = /* GraphQL */ `
  subscription OnCreateTipoEntrada(
    $filter: ModelSubscriptionTipoEntradaFilterInput
  ) {
    onCreateTipoEntrada(filter: $filter) {
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
export const onUpdateTipoEntrada = /* GraphQL */ `
  subscription OnUpdateTipoEntrada(
    $filter: ModelSubscriptionTipoEntradaFilterInput
  ) {
    onUpdateTipoEntrada(filter: $filter) {
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
export const onDeleteTipoEntrada = /* GraphQL */ `
  subscription OnDeleteTipoEntrada(
    $filter: ModelSubscriptionTipoEntradaFilterInput
  ) {
    onDeleteTipoEntrada(filter: $filter) {
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
export const onCreateEvento = /* GraphQL */ `
  subscription OnCreateEvento($filter: ModelSubscriptionEventoFilterInput) {
    onCreateEvento(filter: $filter) {
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
export const onUpdateEvento = /* GraphQL */ `
  subscription OnUpdateEvento($filter: ModelSubscriptionEventoFilterInput) {
    onUpdateEvento(filter: $filter) {
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
export const onDeleteEvento = /* GraphQL */ `
  subscription OnDeleteEvento($filter: ModelSubscriptionEventoFilterInput) {
    onDeleteEvento(filter: $filter) {
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
export const onCreateUsuario = /* GraphQL */ `
  subscription OnCreateUsuario($filter: ModelSubscriptionUsuarioFilterInput) {
    onCreateUsuario(filter: $filter) {
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
export const onUpdateUsuario = /* GraphQL */ `
  subscription OnUpdateUsuario($filter: ModelSubscriptionUsuarioFilterInput) {
    onUpdateUsuario(filter: $filter) {
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
export const onDeleteUsuario = /* GraphQL */ `
  subscription OnDeleteUsuario($filter: ModelSubscriptionUsuarioFilterInput) {
    onDeleteUsuario(filter: $filter) {
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
