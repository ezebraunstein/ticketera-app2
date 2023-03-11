/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
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
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getTipoEntrada = /* GraphQL */ `
  query GetTipoEntrada($id: ID!) {
    getTipoEntrada(id: $id) {
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
export const listTipoEntradas = /* GraphQL */ `
  query ListTipoEntradas(
    $filter: ModelTipoEntradaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTipoEntradas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        monto
        descripcion
        cantidad
        activo
        fechaInicio
        fechaFin
        eventoID
        Tickets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvento = /* GraphQL */ `
  query GetEvento($id: ID!) {
    getEvento(id: $id) {
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
export const listEventos = /* GraphQL */ `
  query ListEventos(
    $filter: ModelEventoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        TipoEntradas {
          nextToken
        }
        usuarioID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsuario = /* GraphQL */ `
  query GetUsuario($id: ID!) {
    getUsuario(id: $id) {
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
export const listUsuarios = /* GraphQL */ `
  query ListUsuarios(
    $filter: ModelUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsuarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        apellido
        dni
        email
        facturacion
        Eventos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ticketsByTipoentradaID = /* GraphQL */ `
  query TicketsByTipoentradaID(
    $tipoentradaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketsByTipoentradaID(
      tipoentradaID: $tipoentradaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const tipoEntradasByEventoID = /* GraphQL */ `
  query TipoEntradasByEventoID(
    $eventoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTipoEntradaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tipoEntradasByEventoID(
      eventoID: $eventoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        monto
        descripcion
        cantidad
        activo
        fechaInicio
        fechaFin
        eventoID
        Tickets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const eventosByUsuarioID = /* GraphQL */ `
  query EventosByUsuarioID(
    $usuarioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventosByUsuarioID(
      usuarioID: $usuarioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        TipoEntradas {
          nextToken
        }
        usuarioID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
